using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AniverSA.Controllers
{
    [Route("[controller]")]
    public class ContactController : Controller
    {
        [HttpPost("[action]")]
        public void Send(string user_name, string user_mail, string user_message) 
        {


        } 
    }
}
