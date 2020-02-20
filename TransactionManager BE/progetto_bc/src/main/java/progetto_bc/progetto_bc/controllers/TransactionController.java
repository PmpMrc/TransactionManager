package progetto_bc.progetto_bc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import progetto_bc.progetto_bc.models.Transaction;
import progetto_bc.progetto_bc.models.User;
import progetto_bc.progetto_bc.repositories.TransactionRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/transactions")
public class TransactionController {
	
	@Autowired
	private TransactionRepository transactionRepository;
	
	@RequestMapping(value = "/getTransactionsByUser", method = RequestMethod.POST, produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody List<Transaction> getTransactionsByUser(@RequestBody User user) {
		try {
			return transactionRepository.findByUser_id(user.getId());
		} catch(Exception e) {
			return null;
		}
	}
	
	@RequestMapping(value = "/insertTransaction", method = RequestMethod.POST, produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody Transaction insertTransaction(@RequestBody Transaction transaction) {
		try {
			return transactionRepository.save(transaction);
		} catch(Exception e) {
			return null;
		}
	}
	
	@RequestMapping(value = "/updateTransaction", method = RequestMethod.POST, produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody Transaction updateTransaction(@RequestBody Transaction transaction) {
		try {
			return transactionRepository.save(transaction);
		} catch(Exception e) {
			return null;
		}
	}

}
