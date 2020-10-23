class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :img
end
