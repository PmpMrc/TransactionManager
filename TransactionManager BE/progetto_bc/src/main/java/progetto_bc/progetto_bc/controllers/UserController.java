package progetto_bc.progetto_bc.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import progetto_bc.progetto_bc.models.DeleteResponse;
import progetto_bc.progetto_bc.models.Transaction;
import progetto_bc.progetto_bc.models.User;
import progetto_bc.progetto_bc.repositories.TransactionRepository;
import progetto_bc.progetto_bc.repositories.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/users")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TransactionRepository transactionRepository;
	
	@RequestMapping(value = "/getUsers", method = RequestMethod.POST, produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody List<User> getUsers() {
		try {
			return userRepository.findAll();
		} catch(Exception e) {
			return null;
		}
	}
	
	@RequestMapping(value = "/insertUser", method = RequestMethod.POST, produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody User insertUser(@RequestBody User user) {
		try {
			return userRepository.save(user);
		} catch(Exception e) {
			return null;
		}
	}
	
	@RequestMapping(value = "/updateUser", method = RequestMethod.POST, produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody User updateUser(@RequestBody User user) {
		try {
			return userRepository.save(user);
		} catch(Exception e) {
			return null;
		}	}
	
	@RequestMapping(value = "/deleteUser", method = RequestMethod.POST, produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody DeleteResponse deleteUser(@RequestBody User user) {
		DeleteResponse response = new DeleteResponse();
		try {
			List<Transaction> transazioni = transactionRepository.findByUser_id(user.getId());
			if(transazioni.isEmpty()) {
				userRepository.delete(user);
			} else {
				response.setEsito("KO");
				response.setMessaggio("L'utente ha delle transazioni associate. Impossibile cancellare i dati.");
				return response;
			}
			response.setEsito("OK");
			response.setMessaggio("OK");
			return response;
		} catch(Exception e) {
			response.setEsito("ERROR");
			response.setMessaggio(e.getMessage());
			return response; 
		}
	}

	
	

}
