class NumberSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :numeric, :color, :oddeven, :highlow, :column, :dozen, :street
end
