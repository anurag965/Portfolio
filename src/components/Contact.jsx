import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const set = k => e => setFields(f => ({ ...f, [k]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    const { name, email, message } = fields
    window.location.href = `mailto:anuragpradhancb@gmail.com?subject=${encodeURIComponent('Inquiry from ' + name)}&body=${encodeURIComponent(message + '\n\n---\nSender: ' + name + '\nEmail: ' + email)}`
    setStatus('✓ Mail client opened. Message ready to send.')
    setFields({ name: '', email: '', message: '' })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('anuragpradhancb@gmail.com')
    setStatus('✓ Email copied to clipboard.')
    setTimeout(() => setStatus(''), 2000)
  }

  return (
    <section id="contact" className="py-16" style={{ borderBottom: '1px solid var(--border-dim)' }}>

      {/* Section heading */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs font-Mono font-bold px-2 py-0.5 rounded" style={{ background: 'var(--blue-subtle)', color: 'var(--blue)' }}>06</span>
          <h2 className="text-3xl font-black tracking-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>Contact</h2>
        </div>
        <p className="text-sm ml-9" style={{ color: 'var(--text-dim)' }}>Initiate uplink connection &amp; networking</p>
      </div>

      {/* Prompt */}
      <div className="term-prompt">
        <span className="prompt-char">$</span>
        <span className="prompt-cmd">curl -X POST https://anurag-sys/api/v1/contact \</span>
      </div>
      <div className="text-sm font-Mono mb-8 pl-4" style={{ color: 'var(--text-dim)' }}>
        &nbsp;&nbsp;&nbsp;--header "Content-Type: application/json" \<br />
        &nbsp;&nbsp;&nbsp;--data @payload.json
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="term-block overflow-hidden max-w-2xl"
      >
        {/* Request meta */}
        <div className="px-5 py-3 border-b text-sm font-Mono flex items-center gap-3" style={{ borderColor: 'var(--border-dim)', background: 'var(--bg-hover)' }}>
          <span className="font-bold px-2 py-0.5 rounded text-sm" style={{ background: 'rgba(59,130,246,0.15)', color: 'var(--blue)' }}>POST</span>
          <span style={{ color: 'var(--text-secondary)' }}>/api/v1/contact</span>
          <span className="ml-auto" style={{ color: 'var(--text-dim)' }}>HTTP/1.1</span>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="px-5 py-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { key: 'name',  label: '"name"',  type: 'text',  ph: 'John Doe' },
              { key: 'email', label: '"email"', type: 'email', ph: 'john@example.com' },
            ].map(f => (
              <div key={f.key} className="flex flex-col gap-1.5">
                <label className="text-sm font-Mono" style={{ color: 'var(--text-dim)' }}>{f.label}:</label>
                <div className="flex items-center gap-1 px-3 py-2 rounded" style={{ background: 'var(--bg)', border: '1px solid var(--border-dim)' }}>
                  <span className="text-sm" style={{ color: 'var(--text-dim)' }}>"</span>
                  <input
                    type={f.type}
                    value={fields[f.key]}
                    onChange={set(f.key)}
                    required
                    placeholder={f.ph}
                    className="term-input text-sm"
                  />
                  <span className="text-sm" style={{ color: 'var(--text-dim)' }}>"</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-Mono" style={{ color: 'var(--text-dim)' }}>"message":</label>
            <div className="px-3 py-2 rounded" style={{ background: 'var(--bg)', border: '1px solid var(--border-dim)' }}>
              <textarea
                value={fields.message}
                onChange={set('message')}
                required
                rows={5}
                placeholder="// your message..."
                className="term-input text-sm resize-none leading-relaxed"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button type="submit" className="term-btn text-sm">
              ❯ send --exec
            </button>
            <button type="button" onClick={copyEmail} className="term-btn term-btn-ghost text-sm">
              ❯ pbcopy &lt;email&gt;
            </button>
          </div>

          {status && (
            <div className="text-sm font-Mono pt-2" style={{ color: 'var(--green, #3fb950)' }}>
              {status}
            </div>
          )}
        </form>
      </motion.div>

      {/* Uplinks */}
      <div className="mt-10">
        <div className="term-section-heading">
          <span style={{ color: 'var(--blue)' }}>//</span>
          <span>uplinks</span>
        </div>
        <div className="space-y-2">
          {[
            ['Email',    'anuragpradhancb@gmail.com',                    'mailto:anuragpradhancb@gmail.com'],
            ['GitHub',   'github.com/anurag965',                         'https://github.com/anurag965'],
            ['LinkedIn', 'linkedin.com/in/anurag-pradhan-0340bb288',     'https://www.linkedin.com/in/anurag-pradhan-0340bb288'],
            ['Scholar',  'Google Scholar — Anurag Pradhan',              'https://scholar.google.co.in/citations?hl=en&user=_cFdzngAAAAJ'],
          ].map(([label, display, href]) => (
            <div key={label} className="flex items-center gap-5 text-sm font-Mono">
              <span className="w-24 text-sm shrink-0" style={{ color: 'var(--text-dim)' }}>{label}:</span>
              <a href={href} target="_blank" rel="noreferrer"
                className="transition-colors text-sm"
                style={{ color: 'var(--blue)' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >
                {display}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
