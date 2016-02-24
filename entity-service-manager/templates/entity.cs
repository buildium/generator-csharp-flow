using System.Data;
using <%= frameworkFilePath %>;

namespace <%= namespace %>
{
    public class <%= fileName %> : EntityBase
    {
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
