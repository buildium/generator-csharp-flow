using System.Data;
using <%= dependencyFilePath %>;

namespace <%= namespace %>
{
    public class <%= fileName %> : EntityBase
    {
      [DbField(true, IsAutoIncrement = true)]
      public uint Id { get; private set; }

      private I<%= fileName %>Manager m_<%= fileName %>Manager;
        private I<%= fileName %>Manager <%= fileName %>Manager => m_<%= fileName %>Manager
            ?? (m_<%= fileName %>Manager = ObjectFactory.GetInstance<I<%= fileName %>Manager>());

        public <%= fileName %>()
        {

        }

        protected override void ValidateEntity()
        {
            throw new System.NotImplementedException();
        }

        public override string TableName { get; }
        protected override void ExecuteCreate(IDbConnection connection)
        {
            throw new System.NotImplementedException();
        }

        protected override void ExecuteUpdate(IDbConnection connection)
        {
            throw new System.NotImplementedException();
        }
    }
}
