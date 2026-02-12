import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="918015359971"
        accountName="Edu Consultants"
        avatar="/assets/edu.png"
        statusMessage="Online"
        chatMessage="Welcome to Edu Consultants! How can we help you?"
        placeholder="Type a message..."
        darkMode={true}
        allowEsc
        allowClickAway
      />
    </div>
  )
}

export default Whatsapp
