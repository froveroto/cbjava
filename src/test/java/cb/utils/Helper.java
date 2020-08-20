package cb.utils;

import static cb.config.DriverFactory.getDriver;
import static cb.config.DriverFactory.killDriver;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.io.FileHandler;

import cb.config.Properties;
import io.cucumber.java.Scenario;

public class Helper {
	
	public static void finalizaTestes() {
		if(Properties.CLOSE_BROWSER) {
			killDriver();
		}
	}
	
	public static void finalizaTestesComScreenShot(Scenario scenario) {
		TakesScreenshot ts = (TakesScreenshot) getDriver();
		File file = ts.getScreenshotAs(OutputType.FILE);
		try {
			FileHandler.copy(file, new File("target/screenshot/"+scenario.getName()+scenario+".jpg"));
			//FileHandler.copy(file, new File("target/screenshot/test.jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		if(Properties.CLOSE_BROWSER) {
			killDriver();
		}
	}
}
