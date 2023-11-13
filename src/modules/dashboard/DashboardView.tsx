'use client';

import PageLayout from '@/layouts/PageLayout';
import Navbar from 'ui-system/components/Navbar';

import Section from 'ui-system/components/Section';

function DashboardView() {  
  return (
    <PageLayout>
      <Navbar />
      <Section $bgImageSrc="/images/example-image-1.jpg" title="Section 1">
        Hello from Dashboard View
      </Section>
      <Section title="Section 2" fullScreen>
        Hello from Dashboard View
      </Section>
    </PageLayout>
  );
}

export default DashboardView;