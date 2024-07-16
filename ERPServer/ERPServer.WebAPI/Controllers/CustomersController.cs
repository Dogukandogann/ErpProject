using ERPServer.Application.Features.Customers.GetAllCustomer;
using ERPServer.WebAPI.Abstractions;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ERPServer.WebAPI.Controllers
{
    public sealed class CustomersController : ApiController
    {
        public CustomersController(IMediator mediator) : base(mediator)
        {
        }
        [HttpPost]
        public async Task<IActionResult> GetAll(GetAllCustomerQuery result,CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(result, cancellationToken);
            return StatusCode(response.StatusCode, response);
        }
    }
}
