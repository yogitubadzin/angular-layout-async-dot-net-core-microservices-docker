using LayoutAsyncLoading.Api.News.Models;
using Microsoft.AspNetCore.Mvc;

namespace LayoutAsyncLoading.Api.News.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NewsController : ControllerBase
    {
        [HttpGet("title")]
        public IActionResult Get()
        {
            var response = new NewsSummary
            {
                Title = "News title from microservice, hello!"
            };

            return Ok(response);
        }
    }
}