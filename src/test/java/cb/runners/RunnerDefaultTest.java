package cb.runners;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

import static cb.config.DriverFactory.getDriver;
import static cb.config.DriverFactory.killDriver;
import static io.cucumber.junit.CucumberOptions.SnippetType.CAMELCASE;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/resources/features"}, 
		glue = {"cb.steps"},
		snippets = CAMELCASE,
		tags = {},
		plugin = {"pretty","html:target/cucumber-html-report"},
		dryRun = false,
		strict = false
		)

public class RunnerDefaultTest {
	
	@BeforeClass
	public static void comecaTodosTestes() {
		getDriver().get("https://www.casasbahia.com.br/");
	}
	
	@AfterClass
	public static void finalizarTodosTestes() {
		killDriver();
	}
}
