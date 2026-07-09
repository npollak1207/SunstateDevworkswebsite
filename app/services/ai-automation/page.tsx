import type { Metadata } from 'next'
import ServiceTemplate from '@/components/ServiceTemplate'

export const metadata: Metadata = {
  title: 'AI & Automation',
  description: 'Custom AI integrations and workflow automation: chatbots, document intelligence and pipelines on Claude, OpenAI and Gemini. Gilbert and Phoenix, AZ.',
  alternates: { canonical: 'https://sunstatedevworks.com/services/ai-automation' },
  openGraph: {
    url: 'https://sunstatedevworks.com/services/ai-automation',
    title: 'AI & Automation | Sunstate DevWorks',
    description: 'Custom AI integrations and workflow automation: chatbots, document intelligence and pipelines on Claude, OpenAI and Gemini.',
  },
}

export default function Page() {
  return (
    <ServiceTemplate
      data={{
        num: '04',
        title: 'AI & Automation',
        titleAccent: 'Automation',
        tagline: 'Chatbots · Workflows · Integrations',
        intro: 'Custom AI integrations and workflow automation. Your team stays the same size while your output multiplies. Built for businesses that run on repetitive, time-eating tasks.',
        included: [
          'Custom AI chatbots trained on your own data',
          'Workflow automation through n8n and custom pipelines',
          'Claude, OpenAI and Gemini integrations',
          'Document intelligence and internal knowledge bots',
          'Connections into the tools you already use',
          'Everything documented and owned by you',
        ],
        approach: [
          { t: 'Start with the bottleneck', d: 'We find the repetitive work eating your team hours and automate that first, where the payback is immediate.' },
          { t: 'Grounded in your data', d: 'AI features are built on your real information, so answers are accurate and useful instead of generic.' },
          { t: 'Reliable, not flashy', d: 'We build automations that run quietly and correctly every day, with monitoring so you know they are working.' },
        ],
        faqs: [
          { q: 'Will this replace my team?', a: 'No. It removes the repetitive busywork so your existing team can focus on the work that actually needs a human.' },
          { q: 'Which AI models do you use?', a: 'Whatever fits the job, including Claude, OpenAI and Gemini. We are not locked to one provider, so you get the best tool for the task.' },
          { q: 'Can it connect to my existing tools?', a: 'Yes. We integrate with the CRMs, spreadsheets, inboxes and apps you already run, so the automation fits your workflow.' },
        ],
      }}
    />
  )
}
