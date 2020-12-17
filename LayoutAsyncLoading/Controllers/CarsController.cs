using System;
using System.Collections.Generic;
using System.Linq;
using LayoutAsyncLoading.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LayoutAsyncLoading.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarsController : ControllerBase
    {
        private static readonly string[] Colors = new[]
        {
            "Red", "Black", "Green", "White", "Blue"
        };

        private static readonly string[] Types = new[]
        {
            "Combi", "Hatchback", "Sedan", "Van", "Car city"
        };

        private static readonly string[] Brands = new[]
        {
            "Volvo", "BMW", "Audi", "Mercedes", "Volkswagen"
        };

        private readonly ILogger<CarsController> _logger;

        public CarsController(ILogger<CarsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Car> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Car
            {
                ProductionDate = DateTime.Now.AddDays(index),
                Color = Colors[rng.Next(Colors.Length)],
                Type = Types[rng.Next(Types.Length)],
                Brand = Brands[rng.Next(Brands.Length)]
            })
            .ToArray();
        }
    }
}
