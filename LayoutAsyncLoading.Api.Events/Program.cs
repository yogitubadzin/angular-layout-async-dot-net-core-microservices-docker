using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace LayoutAsyncLoading.Api.Events
{
    public class Program
    {
        public static void Main(string[] args)
        {
            try
            {

                CreateHostBuilder(args).Build().Run();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);

                if(e.InnerException !=null)
                {
                    Console.WriteLine(e.InnerException.Message);
                }
                throw;
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            return Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
        }
    }
}