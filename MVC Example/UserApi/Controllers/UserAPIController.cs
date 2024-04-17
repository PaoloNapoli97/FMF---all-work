using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using UserModel;

namespace UserAPI.Controllers
{
    
    [ApiController]
    [Route("api/[controller]")]
    public class UserController: ControllerBase
    {
        private static List<User> _users = new List<User> {
            new User ("michele.malgeri@unict.it","Michele Malgeri", "Pibbp"),
            new User ("vincenza.carchiolo@unict.it", "Vincenza Carchiolo", "dfjsdpjfsp"),
            new User ("marco.grassia@unict.it", "Marco Grassia", "perwpfhw")
        };

        [HttpGet]
        public ActionResult<List<User>> Get()
        {
            return Ok(_users);
        }

    [HttpGet]
    [Route("{Id}")]
    public ActionResult<User> Get(string Id)
    {
        var user = _users.Find(x => x.Id == Id);
        return user == null ? NotFound() : Ok(user);
    }

    [HttpPost]
    public ActionResult Post(User user)
    {
        var existingUser = _users.Find(x => x.Id == user.Id);
        if (existingUser != null)
        {
            return Conflict("Cannot create the Id … exists.");
        }
        else
        {
            _users.Add(user);
            var resourceUrl = Request.Path.ToString() + '/' + user.Id;
            return Created(resourceUrl, user);
        }
    }

    [HttpPut]
    public ActionResult Put(User user)
    {
        var existingUser = _users.Find(x => x.Id == user.Id);
        if (existingUser == null)
        {
            return BadRequest("Cannot update … term.");
        } 
        else
        {
            existingUser.Name = user.Name;
            return Ok();
        }
    }

    [HttpDelete]
    [Route("{Id}")]
    public ActionResult Delete(string Id)
    {
        var user=_users.Find(x =>x.Id == Id);
        if(user == null)
        {
            return NotFound();
        }
        else {
            _users.Remove(user);
            return NoContent();
        }
    }
}
}
