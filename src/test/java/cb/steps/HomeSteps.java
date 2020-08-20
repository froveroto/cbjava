package cb.steps;

import static cb.config.DriverFactory.getDriver;

import cb.pages.HomePage;
import cb.utils.Helper;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class HomeSteps {
	
	private HomePage homePage;
	
	@Before
	public void inicialza() {
		homePage = new HomePage();
	}
	
	@After
	public void finalizarTeste(Scenario scenario) {
		Helper.finalizaTestesComScreenShot(scenario);
	}
	
	@Dado("que sou Cliente Casas Bahia")
	public void queSouClienteCasasBahia() {
	    homePage.homeLoad();
	}

	@Quando("eu adicionar {string}")
	public void euAdicionar(String item) {
	    homePage.setBusca(item);
	    homePage.selecionaItem();
	    homePage.adicionaItem();
	}

	@Entao("o produto {string} sera reservado no carrinho")
	public void oProdutoSeraReservadoNoCarrinho(String item) {
	    homePage.validaItemCarrinho(item);
	}
}
