package miniconf;

import miniconf.client.MiniConfCallbackIntf;
import miniconf.client.MiniConfClient_J;

/**
 * Created by wenzhi.bwz on 14-8-18.
 */
public class TestClient_Register {
    public static void main(String args[])
    {
        MiniConfClient_J tmpMiniConfClient = new MiniConfClient_J("http://localhost:8810");
        tmpMiniConfClient.registerListener("g1", "k1", new TestMiniConfCallbackIntfIns("registerListener1"));

        try
        {
            Thread.sleep(10000000);
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
        }
    }
}

class TestMiniConfCallbackIntfIns implements MiniConfCallbackIntf
{
    private String name;

    protected TestMiniConfCallbackIntfIns(String nameParm)
    {
        name = nameParm;
    }

    public void dataHaveModified(String newDataParm)
    {
        System.out.println(name + " dataHaveModified " + newDataParm);
    }
}