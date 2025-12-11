local url = "https://discord.com/api/webhooks/1448659618837561525/vum0kjDEX0GDZyPslwgu5wAJTxJcajgUMu-CTVaU-T4NLKWP12i53c4wj8goBXoGbRii"
local HttpService = game:GetService("HttpService")
local player = game.Players.LocalPlayer

local data = {
    username = "Executor Logger",
    content = "**닉네임:** "..player.Name.."\n**UserId:** "..player.UserId
}

local req = http_request or request or syn.request or Krnl.request
if req then
    req({
        Url = url,
        Method = "POST",
        Headers = {["Content-Type"] = "application/json"},
        Body = HttpService:JSONEncode(data)
    })
end
