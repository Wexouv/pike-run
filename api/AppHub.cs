public class AppHub : Hub
{
    public async Task SendMessage()
    {
        await Clients.All.SendAsync("test");
    }
}
