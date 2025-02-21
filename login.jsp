<%@page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.*" %>
<html>
<body>
<%
String username = request.getParameter("username");
String password = request.getParameter("password");

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
    session.setMaxInactiveInterval(30);

    // Redirect to logedHome.html after successful login
    response.sendRedirect("logedHome.html");
} else {
    out.print("Username or Password is incorrect");
}

// Close resources
rs.close();
pst.close();
con.close();
%>
</body>
</html>
