using System;
using LayoutAsyncLoading.Api.Visits.Models;
using Microsoft.AspNetCore.Mvc;

namespace LayoutAsyncLoading.Api.Visits.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VisitsController : ControllerBase
    {
        [HttpGet("count")]
        public VisitsSummary Get()
        {
            return new VisitsSummary
            {
                Count = new Random().Next(1, 100)
            };
        }
    }
}