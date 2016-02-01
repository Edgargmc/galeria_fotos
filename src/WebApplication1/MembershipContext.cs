using System.Security.Principal;
using WebApplication1.Entities;

namespace WebApplication1.Infrastructure.Services
{
    public class MembershipContext
    {
        public GenericPrincipal Principal { get; internal set; }
        public User User { get; internal set; }
    }
}