package miniconf.client;

import scala.runtime.AbstractFunction1;
import scala.runtime.BoxedUnit;

import java.text.SimpleDateFormat;
import java.util.Calendar;

/**
 * Created by wenzhi.bwz on 14-7-26.
 */
public class MiniConfClient_J {
    private MiniConfClient theMiniConfClient;

    public MiniConfClient_J(String urlParm)
    {
        theMiniConfClient = new MiniConfClient(urlParm);
    }

    public String saveOneConfItem(String groupParm, String keyParm, String valueParm) throws Exception
    {
        return theMiniConfClient.saveOneConfItem(groupParm, keyParm, valueParm);
    }

    public String getOneConfItem(String groupParm, String keyParm) throws Exception
    {
        return theMiniConfClient.getOneConfItem(groupParm, keyParm);
    }

    public void registerListener(String groupParm, String keyParm,
              final MiniConfCallbackIntf theMiniConfCallbackIntfParm)
    {
        theMiniConfClient.registerListener(groupParm, keyParm, new AbstractFunction1<String, BoxedUnit>() {
            public BoxedUnit apply(String argParm) {
                theMiniConfCallbackIntfParm.dataHaveModified(argParm);
                return null;
            }
        });
    }
}
