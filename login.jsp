<%@page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.*" %>
<%@page session="true" %> <!-- Enable session tracking -->

<html>
<body>
<%
    String username = request.getParameter("username");
    String password = request.getParameter("password");

    if (username != null && password != null) {
        try {
            // Load Oracle JDBC Driver
            Class.forName("oracle.jdbc.driver.OracleDriver");
            Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "manager");

            // Use PreparedStatement to prevent SQL injection
            String query = "SELECT * FROM eco WHERE username = ? AND password = ?";
            PreparedStatement pst = con.prepareStatement(query);
            pst.setString(1, username);
            pst.setString(2, password);
            ResultSet rs = pst.executeQuery();

            if (rs.next()) { // If a matching user is found
                session.setAttribute("username", username);
                session.setMaxInactiveInterval(1800); // Session timeout (30 mins)

                // Close resources before redirecting
                rs.close();
                pst.close();
                con.close();

                // Redirect to logedHome.html
                response.sendRedirect("logedHome.html");
            } else {
%>
                <script>
                    alert("Invalid Username or Password! Please try again.");
                    window.location.href = "login.html";
                </script>
<%
            }
            // Close resources
            rs.close();
            pst.close();
            con.close();
        } catch (Exception e) {
            out.println("Database Connection Error: " + e.getMessage());
        }
    } else {
%>
        <script>
            alert("Please enter both username and password.");
            window.location.href = "login.html";
        </script>
<%
    }
%>
</body>
</html>
