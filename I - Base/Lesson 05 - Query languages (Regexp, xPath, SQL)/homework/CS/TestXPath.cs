namespace CS;

[TestClass]
public class TestXPath
{
    [TestMethod]
    [TestCategory("xpath")]
    public void TestMethod1()
    {
        //Arrange
        HomeworkXPath obj = new HomeworkXPath();
        
        //Act
        string result = obj.example1();

        //Assert
        Assert.AreEqual("Text 2", result);
    }

    [TestMethod]
    [TestCategory("xpath")]
    public void TestMethod2()
    {
        //Arrange
        HomeworkXPath obj = new HomeworkXPath();
        
        //Act
        string result = obj.example2();

        //Assert
        Assert.AreEqual("List 2", result);
    }

    [TestMethod]
    [TestCategory("xpath")]
    public void TestMethod3()
    {
        //Arrange
        HomeworkXPath obj = new HomeworkXPath();
        
        //Act
        string result = obj.example3();

        //Assert
        Assert.AreEqual("Text 0", result);
    }

    [TestMethod]
    [TestCategory("xpath")]
    public void TestMethod4()
    {
        //Arrange
        HomeworkXPath obj = new HomeworkXPath();
        
        //Act
        string result = obj.example4();

        //Assert
        Assert.AreEqual("This is <b>text</b> line1", result);
    }

    [TestMethod]
    [TestCategory("xpath")]
    public void TestMethod5()
    {
        //Arrange
        HomeworkXPath obj = new HomeworkXPath();
        
        //Act
        string result = obj.example5();

        //Assert
        Assert.AreEqual("List 4", result);
    }


}