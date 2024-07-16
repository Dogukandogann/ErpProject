﻿using ERPServer.Domain.Entities;
using GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERPServer.Domain.Repositories
{
    public interface ICustomerRepository :IRepository<Customer>
    {
    }
}
