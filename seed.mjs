import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://asmnvwmbfkhnolfnzhym.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzbW52d21iZmtobm9sZm56aHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MjU2OTEsImV4cCI6MjA5NjQwMTY5MX0.eRAJTFPzGxn89DAD6D1P1WfdN-S4yFRgqL1ZLeu8a14'
);

const projects = [
  { title: 'Project 1', description: 'First project from original portfolio', image_url: './projects/img 1.png' },
  { title: 'Project 2', description: 'Second project from original portfolio', image_url: './projects/img 2.png' },
  { title: 'Project 3', description: 'Third project from original portfolio', image_url: './projects/img 3.png' },
  { title: 'Project 4', description: 'Fourth project from original portfolio', image_url: './projects/img 4.png' },
  { title: 'Project 5', description: 'Fifth project from original portfolio', image_url: './projects/img 5.png' },
  { title: 'Project 6', description: 'Sixth project from original portfolio', image_url: './projects/img 6.png' }
];

async function seed() {
  const { data, error } = await supabase.from('projects').insert(projects);
  if (error) console.error('Seed error:', error);
  else console.log('Seeded successfully!');
}

seed();
