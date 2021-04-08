using CoffeeShop.Models;
using System.Collections.Generic;

namespace CoffeeShop.Repositories
{
    public interface ICoffeeRepository
    {
        void Add(Coffee coffee);
        void Delete(int id);
        List<Coffee> GetAll();
        Coffee GetById(int id);
        void Update(Coffee coffee);
    }
}