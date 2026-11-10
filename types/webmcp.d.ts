// Declarative WebMCP attributes (https://developer.chrome.com/docs/ai/webmcp):
// they describe a form as a tool that browser AI agents can fill in. React
// passes them through to the DOM; this only teaches TypeScript about them.
import 'react'

declare module 'react' {
  interface FormHTMLAttributes<T> {
    toolname?: string
    tooldescription?: string
  }
  interface InputHTMLAttributes<T> {
    toolparamtitle?: string
    toolparamdescription?: string
  }
  interface TextareaHTMLAttributes<T> {
    toolparamtitle?: string
    toolparamdescription?: string
  }
}
