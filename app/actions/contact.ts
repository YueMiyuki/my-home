"use server"

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    if (!name || !email || !subject || !message) {
      return { success: false, message: "All fields are required" }
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      return { success: false, message: "Webhook URL not configured" }
    }

    const payload = {
      embeds: [
        {
          title: `New Contact Form Submission: ${subject}`,
          color: 0xe91e63, // Primary color in decimal
          fields: [
            {
              name: "Name",
              value: name.toString(),
              inline: true,
            },
            {
              name: "Email",
              value: email.toString(),
              inline: true,
            },
            {
              name: "Message",
              value: message.toString(),
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      return { success: false, message: "Failed to send message" }
    }

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error sending message:", error)
    return { success: false, message: "An error occurred while sending your message" }
  }
}
