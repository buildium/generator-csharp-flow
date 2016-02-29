namespace <%= namespace %>
{
    public class <%= fileName %>Service : I<%= fileName %>Service
    {
      private readonly I<%= fileName %>Manager m_<%= fileName %>Manager;

        public <%= fileName %>Service(I<%= fileName %>Manager <%= fileName %>Manager)
        {
            m_<%= fileName %>Manager = <%= fileName %>Manager;
        }
    }
}
