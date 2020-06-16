using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Register.Model;

namespace Register.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeDbContext _context;

        public EmployeeController( EmployeeDbContext context)
        {
            _context = context;
        }

        // POST: api/Employee
        [HttpPost]
        public IActionResult saveRegisterData([FromBody] Employees emp)
        {
            return Ok(_context.Add(new Employees
            {
                FirstName = emp.FirstName,
                LastName = emp.LastName,
                Address = emp.Address,
                Salary = emp.Salary,
                MobileNumber = emp.MobileNumber
            }));
        }
    }
}
