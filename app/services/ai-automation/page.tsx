import type { Metadata } from 'next'
import ServiceTemplate from '@/components/ServiceTemplate'
import { openGraphBase } from '@/lib/metadata'

const description = 'AI automation and integration for Phoenix and Gilbert, AZ businesses. Custom chatbots, document intelligence and workflow automation on Claude, OpenAI and n8n.'

export const metadata: Metadata = {
  title: 'AI Automation & Integration, Phoenix AZ',
  description,
  alternates: { canonical: 'https://sunstatedevworks.com/services/ai-automation' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/services/ai-automation',
    title: 'AI Automation & Integration, Phoenix AZ | Sunstate DevWorks',
    description,
  },
}

export default function Page() {
  return (
    <ServiceTemplate
      data={{
        num: '04',
        slug: 'ai-automation',
        title: 'AI & Automation',
        heading: 'AI integration & automation',
        headingAccent: 'in Phoenix, AZ.',
        serviceType: 'AI integration and business automation',
        tagline: 'Chatbots · Workflows · Integrations',
        intro: 'Custom AI integrations and workflow automation for Arizona businesses. Your team stays the same size while your output multiplies. Built for companies that run on repetitive, time-eating tasks.',
        overviewHeading: ['Practical AI,', 'not hype.'],
        overview: [
          'Most businesses do not need a moonshot AI strategy. They need the quote that takes an hour to write, the inbox nobody keeps up with and the data entry between three systems to take care of itself. That is where we start: find the repetitive work that eats your team hours, then automate it with tools reliable enough to trust every day.',
          'We build with Claude, OpenAI and Gemini, and orchestrate workflows with n8n and custom code. AI features are grounded in your own documents and data, so answers are specific to your business instead of generic, and every automation is logged and monitored so you know it ran.',
          'In the Con Gusto platform we built for Liberty Military Housing, crews add photos and notes to a job and AI drafts a priced estimate from them, drawing on the company price list first. In the ELS app, an AI assistant searches job notes and delivers a daily briefing of what needs attention.',
        ],
        included: [
          'Custom AI chatbots trained on your own data',
          'Workflow automation through n8n and custom pipelines',
          'Claude, OpenAI and Gemini integrations',
          'Document intelligence and internal knowledge bots',
          'Connections into the tools you already use',
          'Everything documented and owned by you',
        ],
        useCasesHeading: ['Where automation', 'pays off.'],
        useCases: [
          { t: 'AI chatbots & assistants', d: 'Website and internal assistants that know your services, policies and documents, answer questions, and hand off to a person when needed.' },
          { t: 'Document intelligence', d: 'Pull data out of invoices, contracts, forms and PDFs automatically, and route it into the system where it belongs.' },
          { t: 'Workflow automation', d: 'Connect your CRM, inbox, spreadsheets and scheduling tools so leads, follow-ups and reports move without copy-and-paste.' },
          { t: 'AI-drafted estimates', d: 'Turn photos and job notes into a priced first draft your team reviews and sends, instead of starting from a blank page.' },
        ],
        approach: [
          { t: 'Start with the bottleneck', d: 'We find the repetitive work eating your team hours and automate that first, where the payback is immediate.' },
          { t: 'Grounded in your data', d: 'AI features are built on your real information, so answers are accurate and useful instead of generic.' },
          { t: 'Reliable, not flashy', d: 'We build automations that run quietly and correctly every day, with monitoring so you know they are working.' },
        ],
        projects: ['conGusto', 'elsApp'],
        faqs: [
          { q: 'Will this replace my team?', a: 'No. It removes the repetitive busywork so your existing team can focus on the work that actually needs a human.' },
          { q: 'How do I know what to automate first?', a: 'That is what the discovery call is for. We walk through where your team spends its week, pick the task with the clearest payback, and automate that first. Once it runs reliably, we move to the next one.' },
          { q: 'Which AI models do you use?', a: 'Whatever fits the job, including Claude, OpenAI and Gemini. We are not locked to one provider, so you get the best tool for the task.' },
          { q: 'Is my business data safe?', a: 'We design every integration around your data: business API access that does not train on your inputs, tight limits on what each tool can reach, and sensitive records kept inside systems you control.' },
          { q: 'Do I need a lot of data to get started?', a: 'No. Many useful automations only need access to the tools you already use, and assistants can work from the documents, FAQs and records you already have.' },
          { q: 'Can it connect to my existing tools?', a: 'Yes. We integrate with the CRMs, spreadsheets, inboxes and apps you already run, so the automation fits your workflow.' },
        ],
      }}
    />
  )
}
