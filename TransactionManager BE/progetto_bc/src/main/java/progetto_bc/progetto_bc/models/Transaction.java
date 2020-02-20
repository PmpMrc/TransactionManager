package progetto_bc.progetto_bc.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "T_TRANSACTION") 
public class Transaction {

    @Id
	@SequenceGenerator(name = "transactionSequence", sequenceName = "S_TRANSACTION", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "transactionSequence")
    @Column(name = "ID")
	private long id;
	
    @ManyToOne( fetch=FetchType.EAGER )
    @JoinColumn(name = "USER", referencedColumnName = "ID")
	private User user;
	
    @Column(name = "TRANSACTION_DATE")
	private Date transactionDate;
	
    @Column(name = "VALUE")
	private double value;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}

	public double getValue() {
		return value;
	}

	public void setValue(double value) {
		this.value = value;
	}
	
}
