<%
    String username = (String) session.getAttribute("username");
    if (username != null) {
        out.print(username);
    } else {
        out.print("Guest");
    }
%>