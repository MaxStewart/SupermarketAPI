using Supermarket.API.Persistance.Contexts;

namespace Supermarket.API.Persistance.Repositories 
{
    public abstract class BaseRepository
    {
        protected readonly AppDbContext _context;

        public BaseRepository(AppDbContext context)
        {
            _context = context;
        }
    }
}