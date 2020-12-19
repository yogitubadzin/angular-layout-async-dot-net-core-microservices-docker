using System;
using LayoutAsyncLoading.Api.Events.Models;
using Microsoft.AspNetCore.Mvc;

namespace LayoutAsyncLoading.Api.Events.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventsController : ControllerBase
    {
        [HttpGet("count")]
        public EventsSummary Get()
        {
            return new EventsSummary
            {
                Count = new Random().Next(1, 100)
            };
        }
    }
}