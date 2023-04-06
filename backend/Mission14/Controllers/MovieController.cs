using Microsoft.AspNetCore.Mvc;
using Mission14.Data;

namespace Mission14.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;
        public MovieController(MoviesDbContext temp) {
            context = temp;
        }
        
        public IEnumerable<Movie> Get()
        {
            var m = context.Movies.Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Category).ToArray();
            return m;
        }
    }
}
