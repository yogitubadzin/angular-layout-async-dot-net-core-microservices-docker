using LayoutAsyncLoading.Api.About.Models;
using Microsoft.AspNetCore.Mvc;

namespace LayoutAsyncLoading.Api.About.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AboutController : ControllerBase
    {
        [HttpGet("title")]
        public IActionResult Get()
        {
            var response = new AboutSummary
            {
                Title = "About title from microservice, hello!"
            };

            return Ok(response);
        }
    }
}