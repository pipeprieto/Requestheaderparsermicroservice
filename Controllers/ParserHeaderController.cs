using Microsoft.AspNetCore.Mvc;
using RequestHeaderParserMicroservice.Model;
using System.Net;
using System.Net.Sockets;

namespace RequestHeaderParserMicroservice.Controllers{
    [ApiController]
    [Route("api/whoami")]
    public class ParserHeaderController : ControllerBase{

        [HttpGet]
        public IActionResult GetParsedHeader(){
            
            string ip = HttpContext.Connection.RemoteIpAddress!.ToString();
            string lang = HttpContext.Request.Headers["Accept-Language"]!;
            string softwr = HttpContext.Request.Headers["User-Agent"]!;
            ParsedHeaderModel parsedHeader = new ParsedHeaderModel(ip, lang,softwr);
            return Ok(parsedHeader);
        }

    }
}