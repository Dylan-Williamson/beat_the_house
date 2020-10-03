class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :balance
end
