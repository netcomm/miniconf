package miniconf;

import miniconf.client.MiniConfClient_J;

/**
 * Created by wenzhi.bwz on 14-8-16.
 */
public class TestClient_AddAndGetValue {
    public static void main(String args[]) {
        MiniConfClient_J tmpMiniConfClient = new MiniConfClient_J("http://localhost:8810");
        try {
            String tmpStr = tmpMiniConfClient.saveOneConfItem("g1", "k1", "123456");
            System.out.println("save one conf result " + tmpStr);

            tmpStr = tmpMiniConfClient.getOneConfItem("g1", "k1");
            System.out.println("get one conf return "+tmpStr);
        } catch (Exception ex) {
            System.out.println("exception " + ex.getMessage());
            ex.printStackTrace();
        }
    }
}

