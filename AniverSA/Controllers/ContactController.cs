using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AniverSA.Controllers
{
    [Route("[controller]")]
    public class ContactController : Controller
    {
        [HttpPost("[action]")]
        public IActionResult Send(string user_name, string user_mail, string user_message) 
        {
            var getIdentification = ConfigurationManager.GetSection("secureAppSettings") as NameValueCollection;

            //Confirmation Mail for User
            string subject_user = "Gracias por Contactarte";
            
            string body_user = "<p>Hola " + user_name + ", <br>a la brevedad estaremos respondiendo su consulta.<br> Por favor, no responda a este correo.<br> AniverSA</p>";
            
            Send_mail_from_AniverSA(user_mail, subject_user, body_user);

            //Contact Data Mail for Company
            string subject_company = "Contacto - " + user_name;

            string body_company = "<h2>" + user_name + " | " + user_mail + "</h2><p>" + user_message + "</p>";
            
            Send_mail_from_AniverSA(getIdentification["Company_Email"], subject_company, body_company);

            return Redirect("/");
        }

        public string Send_mail_from_AniverSA(string To, string Subject, string Body)
        {
            MailMessage new_mail = new MailMessage();

            var getIdentification = ConfigurationManager.GetSection("secureAppSettings") as NameValueCollection;

            //To
            new_mail.To.Add(To);

            //From
            new_mail.From = new MailAddress(getIdentification["Company_Email"], "AniverSA", System.Text.Encoding.UTF8);

            //Subject
            new_mail.Subject = Subject;
            new_mail.SubjectEncoding = System.Text.Encoding.UTF8;

            //Body
            new_mail.Body = Body;
            new_mail.BodyEncoding = System.Text.Encoding.UTF8;
            new_mail.IsBodyHtml = true;

            //SMTP
            SmtpClient protocol = new SmtpClient();
            protocol.Credentials = new NetworkCredential(getIdentification["Company_Email"], getIdentification["Company_Email_Password"]);
            protocol.Port = 587;
            protocol.Host = "smtp.gmail.com";
            protocol.EnableSsl = true;

            //Send
            try
            {
                protocol.Send(new_mail);
                return "SEND_OK";
            }
            catch (SmtpException error)
            {
                return ("ERROR_" + error.Message.ToString());
            }
        }
    }
}
