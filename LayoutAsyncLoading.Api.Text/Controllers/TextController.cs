using LayoutAsyncLoading.Api.Text.Models;
using Microsoft.AspNetCore.Mvc;

namespace LayoutAsyncLoading.Api.Text.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TextController : ControllerBase
    {
        [HttpGet("title")]
        public IActionResult Get()
        {
            var response = new TextSummary
            {
                Title = "Text title from microservice, hello!"
            };

            return Ok(response);
        }
    }
}