using System;
using LayoutAsyncLoading.Api.Payments.Models;
using Microsoft.AspNetCore.Mvc;

namespace LayoutAsyncLoading.Api.Payments.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PaymentsController : ControllerBase
    {
        [HttpGet("count")]
        public PaymentsSummary Get()
        {
            return new PaymentsSummary
            {
                Count = new Random().Next(1, 100)
            };
        }
    }
}