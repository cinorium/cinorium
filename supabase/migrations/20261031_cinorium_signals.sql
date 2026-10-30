-- ==============================================================================
-- Cinorium Signals Database Schema
-- Run this in your Supabase SQL Editor (https://app.supabase.com)
-- ==============================================================================

-- 1. Anonymous First-Party Visitor Sessions
CREATE TABLE IF NOT EXISTS visitor_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_token VARCHAR(64) UNIQUE NOT NULL,
  interest_score INT DEFAULT 0 NOT NULL,
  interest_level VARCHAR(20) DEFAULT 'LOW' NOT NULL,
  first_page VARCHAR(255) NOT NULL,
  last_page VARCHAR(255) NOT NULL,
  page_views_count INT DEFAULT 1 NOT NULL,
  last_category VARCHAR(100),
  converted BOOLEAN DEFAULT FALSE NOT NULL,
  first_seen_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  last_seen_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_sessions_token ON visitor_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_sessions_interest ON visitor_sessions(interest_score DESC);

-- 2. First-Party Anonymous Visitor Events
CREATE TABLE IF NOT EXISTS visitor_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_token VARCHAR(64) NOT NULL,
  event_type VARCHAR(50) NOT NULL,
  page_path VARCHAR(255) NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  score_delta INT DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_events_session ON visitor_events(session_token);
CREATE INDEX IF NOT EXISTS idx_events_created ON visitor_events(created_at DESC);

-- 3. Captured Leads
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_token VARCHAR(64),
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  website_url VARCHAR(255),
  phone VARCHAR(50),
  interest_area VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  source_page VARCHAR(255) NOT NULL,
  campaign_id VARCHAR(100) NOT NULL,
  interest_score_at_capture INT DEFAULT 0 NOT NULL,
  status VARCHAR(50) DEFAULT 'NEW' NOT NULL,
  ip_hash VARCHAR(64),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);

-- 4. Internal CRM Notes
CREATE TABLE IF NOT EXISTS lead_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  author VARCHAR(100) DEFAULT 'Cinorium Team' NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_lead_notes_lead_id ON lead_notes(lead_id);

-- Enable Row Level Security (RLS)
ALTER TABLE visitor_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_notes ENABLE ROW LEVEL SECURITY;

-- Allow access for both anon key and service role key
DROP POLICY IF EXISTS "Server full access on leads" ON leads;
DROP POLICY IF EXISTS "Server full access on lead_notes" ON lead_notes;
DROP POLICY IF EXISTS "Server full access on visitor_sessions" ON visitor_sessions;
DROP POLICY IF EXISTS "Server full access on visitor_events" ON visitor_events;

CREATE POLICY "Allow all operations on leads" ON leads FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on lead_notes" ON lead_notes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on visitor_sessions" ON visitor_sessions FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on visitor_events" ON visitor_events FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Server full access on visitor_events" ON visitor_events FOR ALL USING (auth.role() = 'service_role');

