import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class PostgreSQLConnection {
    public static void main(String[] args) {
        // Database URL
        String url = "jdbc:postgresql://localhost:5432/CodeGym";
        // Database credentials
        String user = "postgres";
        String password = "2004";

        // Connection object
        Connection connection = null;

        try {
            // Connect to PostgreSQL
            connection = DriverManager.getConnection(url, user, password);
            if (connection != null) {
                System.out.println("Connected to the PostgreSQL server successfully!");
            }
        } catch (SQLException e) {
            System.out.println("Connection failed!");
            e.printStackTrace();
        } finally {
            // Close connection (optional but recommended)
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
        }
    }
}
