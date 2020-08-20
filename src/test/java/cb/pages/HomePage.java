package cb.pages;

import static cb.config.DriverFactory.getDriver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage {
	
	private By buscaCamp = By.xpath("//*[@id=\"strBusca\"]");
	private By btnBuscar = By.xpath("//*[@id=\"btnOK\"]");
	private By itemFirst = By.className("ProductCard__Title-sc-2vuvzo-0 kCWdGv");
	private By titleItem = By.xpath("//*[@id=\"ctl00_Conteudo_2873\"]/div[2]/h1/b");
	private By btnComprar = By.xpath("//*[@id=\"btnAdicionarCarrinho\"]");
	private By btnContinuar = By.xpath("//*[@id=\"sectionContent\"]/div/div[2]/div/a");
	private By btnConcluir = By.xpath("//*[@id=\"sectionContent\"]/div[1]/div/div[4]/a");
	private By txtMeuCarrinho = By.xpath("//*[@id=\"sectionContent\"]/div[1]/div/h2");
	private By itemCarrinho = By.xpath("//*[@id=\"sectionContent\"]/div[1]/div/table/tbody/tr/td[1]/a/strong");
	
	
	
	WebDriverWait wait = new WebDriverWait(getDriver(), 30);
	Actions actions = new Actions(getDriver());
	
	public void homeLoad() {
		WebElement waitbuscaCamp = getDriver().findElement(buscaCamp);
		//wait.until(ExpectedConditions.visibilityOf(waitbuscaCamp));
		wait.until(ExpectedConditions.elementToBeClickable(waitbuscaCamp));
	}

	public void setBusca(String item) {
		getDriver().findElement(buscaCamp).sendKeys(item);
		getDriver().findElement(btnBuscar).click();
		getDriver().findElement(itemFirst);
	}

	public void selecionaItem() {
		getDriver().findElement(itemFirst).click();
		getDriver().findElement(titleItem);
	}

	public void adicionaItem() {
		getDriver().findElement(btnComprar).click();
		getDriver().findElement(btnContinuar).click();
	}
	
	public void validaItemCarrinho(String item) {
		getDriver().findElement(btnConcluir);
		getDriver().findElement(txtMeuCarrinho);
		getDriver().findElement(itemCarrinho).getAttribute(item);
	}

}
